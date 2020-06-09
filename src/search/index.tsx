import { createNamespace } from '../utils';
import { inherit, emit } from '../utils/functional';
import { preventDefault } from '../utils/dom/event';
import Field from '../field';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots, ScopedSlot } from '../utils/types';

const [createComponent, bem, t] = createNamespace('search');

export type SearchProps = {
  shape: 'sqaure' | 'round';
  value?: string;
  label?: string;
  leftIcon: string;
  rightIcon?: string;
  clearable: boolean;
  background: string;
  actionText?: string;
  showAction?: boolean;
  placeholderLength: number;
  reverseColor: boolean;
};

export type SearchSlots = DefaultSlots & {
  label?: ScopedSlot;
  action?: ScopedSlot;
  'left-icon'?: ScopedSlot;
  'right-icon'?: ScopedSlot;
};

export type SearchEvents = {
  onCancel?(): void;
  onInput?(value: string): void;
  onSearch?(value: string): void;
  onKeypress?(event: KeyboardEvent): void;
  onFocus?(event: string): void;
};

function Search(
  h: CreateElement,
  props: SearchProps,
  slots: SearchSlots,
  ctx: RenderContext<SearchProps>
) {
  function Label() {
    if (slots.label || props.label) {
      return (
        <div class={bem('label')}>
          {slots.label ? slots.label() : props.label}
        </div>
      );
    }
  }

  function Action() {
    function onCancel() {
      if (slots.action) {
        return;
      }

      emit(ctx, 'input', '');
      emit(ctx, 'cancel');
    }

    return (
      <div
        vShow={props.showAction}
        class={bem('action')}
        role="button"
        tabindex="0"
        onClick={onCancel}
      >
        {slots.action ? slots.action() : props.actionText || t('cancel')}
      </div>
    );
  }

  const fieldData = {
    attrs: ctx.data.attrs,
    on: {
      ...ctx.listeners,
      keypress(event: KeyboardEvent) {
        // press enter
        if (event.keyCode === 13) {
          preventDefault(event);
          emit(ctx, 'search', props.value);
        }
        emit(ctx, 'keypress', event);
      },
      focus() {
        emit(ctx, 'focus', event);
      }
    }
  };

  const inheritData = inherit(ctx);
  inheritData.attrs = undefined;

  return (
    <div
      class={bem({
        'show-action': props.showAction,
        'reverse-color': props.reverseColor
      })}
      style={{ background: props.background }}
      {...inheritData}
    >
      <div class={bem('content', props.shape)}>
        {Label()}
        <Field
          type="search"
          border={false}
          value={props.value}
          leftIcon={props.leftIcon}
          rightIcon={props.rightIcon}
          clearable={props.clearable}
          placeholderLength={props.placeholderLength}
          scopedSlots={{
            'left-icon': slots['left-icon'],
            'right-icon': slots['right-icon']
          }}
          {...fieldData}
        />
      </div>
      {Action()}
    </div>
  );
}

Search.props = {
  value: String,
  label: String,
  rightIcon: String,
  actionText: String,
  showAction: Boolean,
  shape: {
    type: String,
    default: 'square'
  },
  clearable: {
    type: Boolean,
    default: true
  },
  background: {
    type: String,
    default: '#fff'
  },
  leftIcon: {
    type: String,
    default: 'search'
  },
  placeholderLength: {
    type: Number,
    default: 8
  },
  reverseColor: Boolean
};

export default createComponent<SearchProps, SearchEvents, SearchSlots>(Search);

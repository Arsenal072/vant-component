import { createNamespace, addUnit } from '../utils';
import { BORDER_TOP, BORDER_LEFT } from '../utils/constant';
import { ChildrenMixin } from '../mixins/relation';
import { route, routeProps } from '../utils/router';
import Info from '../info';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('grid-item');

export default createComponent({
  mixins: [ChildrenMixin('vanGrid')],

  props: {
    ...routeProps,
    dot: Boolean,
    text: String,
    icon: String,
    info: [Number, String]
  },

  computed: {
    style() {
      const { square, gutter, columnNum } = this.parent;
      const percent = `${100 / columnNum}%`;

      const style = {
        flexBasis: percent
      };

      if (square) {
        style.paddingTop = percent;
      } else if (gutter) {
        const gutterValue = addUnit(gutter);
        style.paddingRight = gutterValue;
        if (this.index >= columnNum) {
          style.marginTop = gutterValue;
        }
      }
      return style;
    },

    contentStyle() {
      const { square, gutter } = this.parent;

      if (square && gutter) {
        const gutterValue = addUnit(gutter);

        return {
          right: gutterValue,
          bottom: gutterValue,
          height: 'auto'
        };
      }
    }
  },

  methods: {
    onClick(event) {
      this.$emit('click', event);
      route(this.$router, this);
    },

    genIcon() {
      const iconSlot = this.slots('icon');
      if (iconSlot) {
        return (
          <div class={bem('icon-wrapper')}>
            {iconSlot}
            <Info dot={this.dot} info={this.info} />
          </div>
        );
      }
      if (this.icon) {
        return (
          <Icon
            name={this.icon}
            dot={this.dot}
            info={this.info}
            size={this.parent.iconSize}
            class={bem('icon')}
          />
        );
      }
    },

    genContent() {
      const slot = this.slots();
      if (slot) {
        return slot;
      }

      return [
        this.genIcon(),
        this.slots('text') ||
          (this.text && <span class={bem('text')}>{this.text}</span>)
      ];
    }
  },

  render() {
    const {
      center,
      border,
      square,
      gutter,
      clickable,
      columnNum,
      rowNum
    } = this.parent;
    return (
      <div
        class={[
          bem({
            square
          })
        ]}
        style={this.style}
      >
        <div
          style={this.contentStyle}
          role={clickable ? 'button' : null}
          tabindex={clickable ? 0 : null}
          class={[
            bem(`${columnNum}`, { more: columnNum === 4 && rowNum > 1 }),
            bem('content', {
              center,
              square,
              clickable,
              surround: border && gutter,
              'first-row': !gutter && border && this.index < columnNum,
              'last-row':
                !gutter &&
                border &&
                this.index >= (rowNum - 1) * columnNum &&
                this.index < rowNum * columnNum
            }),
            {
              [BORDER_LEFT]: !gutter && border && this.index % columnNum !== 0,
              [BORDER_TOP]: !gutter && border && this.index + 1 > columnNum
            }
          ]}
          onClick={this.onClick}
        >
          {this.genContent()}
        </div>
      </div>
    );
  }
});

import { createNamespace } from '../utils';
import Row from '../row';
import Divider from '../divider';

const [createComponent, bem] = createNamespace('text-box');

export default createComponent({
  props: {
    type: {
      type: String,
      default: '1'
    },
    cover: String,
    title: String,
    content: String,
    subTitle: [String, Array],
    tip: String,
    subContent: [String, Array]
  },

  render() {
    const {
      type,
      slots,
      title,
      content,
      subTitle,
      subContent,
      tip,
      cover
    } = this;

    const subContent4 = ele => (
      <div class={bem('sub-content')}>
        {typeof ele === 'string' ? (
          <div class={bem('sub-content-item')}>{ele}</div>
        ) : (
          ele.map((item, index) => (
            <span class={bem('sub-content-item')}>
              {item}
              <i vShow={index !== ele.length - 1} class={bem('gap')}></i>
            </span>
          ))
        )}
      </div>
    );

    switch (type) {
      case '1':
        return (
          <div class={bem(['box1'])}>
            {slots('title') ||
              (title && (
                <div class={[bem('title'), 'van-ellipsis']}>{title}</div>
              ))}
            {slots('content') ||
              (content && <div class={bem('content')}>{content}</div>)}
            {slots('default')}
          </div>
        );
      case '2':
        return (
          <div class={bem(['box2'])}>
            <Row type="flex">
              {slots('cover') ||
                (cover && <img src={cover} class={bem('cover')}></img>)}
              <div class={bem('content-wrapper')}>
                {slots('title') ||
                  (title && (
                    <div class={[bem('title'), 'van-multi-ellipsis--l1']}>
                      {title}
                    </div>
                  ))}
                {slots('content') ||
                  (content && (
                    <div class={[bem('content'), 'van-multi-ellipsis--l1']}>
                      {content}
                    </div>
                  ))}
                {
                  <Row
                    type="flex"
                    align="center"
                    justify="space-between"
                    class={bem('sub-content-wrapper')}
                  >
                    {subContent && (
                      <div class={bem('sub-content')}>{subContent}</div>
                    )}
                    {slots('tip') ||
                      (tip && <div class={bem('tip')}>{tip}</div>)}
                  </Row>
                }
                {slots('default')}
              </div>
            </Row>
          </div>
        );
      case '3':
        return (
          <div class={bem(['box3'])}>
            <Row type="flex" align="center" justify="space-between">
              <Row type="flex" align="center">
                {slots('cover') ||
                  (cover && <img src={cover} class={bem('cover')}></img>)}
                {slots('title') ||
                  (title && (
                    <span class={[bem('title'), 'van-multi-ellipsis--l1']}>
                      {title}
                    </span>
                  ))}
                {subTitle && (
                  <span class={[bem('sub-title'), 'van-multi-ellipsis--l1']}>
                    {subTitle}
                  </span>
                )}
              </Row>
              {slots('tip') || (tip && <div class={bem('tip')}>{tip}</div>)}
            </Row>
            {slots('content') ||
              (content && (
                <div class={[bem('content'), 'van-multi-ellipsis--l2']}>
                  {content}
                </div>
              ))}
            {slots('default')}
          </div>
        );
      case '4':
        return (
          <div class={bem(['box4'])}>
            {slots('cover') ||
              (cover && (
                <div class={bem('cover-wrapper')}>
                  <img src={cover} class={bem('cover')} />
                </div>
              ))}
            {slots('title') || (
              <div class={[bem('title'), 'van-ellipsis']}>{title}</div>
            )}
            {subTitle &&
              (typeof subTitle === 'string' ? (
                <div class={bem('sub-item')}>
                  <div class={bem('sub-title')}>{subTitle}</div>
                  {subContent4(subContent)}
                </div>
              ) : (
                subTitle.map((item, i) => (
                  <div class={bem('sub-item')}>
                    {i > 0 && <Divider dashed margin={15} />}
                    <div class={bem('sub-title')}>{item}</div>
                    {subContent instanceof Array && subContent4(subContent[i])}
                  </div>
                ))
              ))}
            {slots('default')}
          </div>
        );
      case '5':
        return (
          <div class={bem(['box5'])}>
            <Row
              type="flex"
              align="center"
              justify="space-between"
              class={bem('header')}
            >
              {subTitle && (
                <div class={[bem('sub-title'), 'van-multi-ellipsis--l1']}>
                  {subTitle}
                </div>
              )}
              {slots('tip') ||
                (tip && (
                  <span class={[bem('tip'), 'van-multi-ellipsis--l1']}>
                    {tip}
                  </span>
                ))}
            </Row>
            <Divider />
            <Row type="flex" class={bem('content-wrapper')}>
              {slots('cover') ||
                (cover && <img src={cover} class={bem('cover')}></img>)}
              <div>
                {slots('title') ||
                  (title && (
                    <div class={[bem('title'), 'van-multi-ellipsis--l1']}>
                      {title}
                    </div>
                  ))}
                {slots('content') ||
                  (content && <div class={bem('content')}>{content}</div>)}
              </div>
            </Row>
            {slots('default')}
          </div>
        );
    }
  }
});

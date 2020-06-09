import { createNamespace } from '../utils';
import date from './utils';

const [createComponent, bem] = createNamespace('schedule');

export default createComponent({
  props: {
    title: String,
    data: {
      type: Array,
      default: []
    },
    dataKey: {
      type: String,
      default: 'content'
    },
    calendar: Array,
    label: Array,
    start: String,
    days: {
      type: Number,
      default: 7
    },
    prefix: {
      type: String,
      default: '星期'
    },
    exclude: Array,
    showWeek: {
      type: Boolean,
      default: true
    },
    dateFormat: {
      type: String,
      default: 'mm-dd'
    },
    lighter: [String, Array],
    opacity: [String, Array]
  },
  data() {
    return {
      header: []
    };
  },
  created() {
    this.header = this.calendar || this.getCalendar();
  },
  methods: {
    getCalendar() {
      const arr = date.getDates(this.start, this.days);
      const arr1 = [];
      for (let i = 0; i < arr.length; i++) {
        const day = date.getWeekday(arr[i], this.prefix, this.exclude);
        arr[i] = date.formatWithPatternDate(this.dateFormat, arr[i]);
        if (day) {
          this.showWeek ? arr1.push(`${day} ${arr[i]}`) : arr1.push(arr[i]);
        }
      }
      return arr1;
    }
  },

  render() {
    const hasText = (text, v) => {
      if (this[v] && this[v].length > 0) {
        const arr = typeof this[v] === 'string' ? [this[v]] : this[v];
        return ~arr.indexOf(text);
      }
    };

    const title =
      this.slots('title') ||
      (this.title && <div class={bem('title')}>{this.title}</div>);

    const header = this.header.map(item => (
      <td class={bem('header')}>
        {this.slots('header') ||
          (item.split(' ') && (
            <div>
              <p class={bem('week')}>{item.split(' ')[0]}</p>
              <p class={bem('date')}>{item.split(' ')[1]}</p>
            </div>
          )) || { item }}
      </td>
    ));

    const content = this.data.map(
      item =>
        item &&
        item.length > 0 &&
        item.map(
          (jitem, jindex) =>
            jindex < this.header.length && (
              <td
                class={[
                  bem(
                    'cell',
                    jitem[this.dataKey]
                      ? [
                          'content',
                          {
                            lighter: hasText(jitem[this.dataKey], 'lighter'),
                            opacity: hasText(jitem[this.dataKey], 'opacity')
                          }
                        ]
                      : ''
                  )
                ]}
              >
                {this.slots('default') || jitem[this.dataKey]}
              </td>
            )
        )
    );

    const main = this.label
      ? this.label.map((item, i) => (
          <tr>
            <td class={bem('label')}>{item}</td>
            {content[i]}
          </tr>
        ))
      : this.data.map((item, i) => <tr>{content[i]}</tr>);

    return (
      <div class={bem()}>
        {title}
        <table class={bem('table')}>
          <tr>
            {this.label && <td></td>}
            {header}
          </tr>
          {main}
        </table>
      </div>
    );
  }
});

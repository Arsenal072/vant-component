const date = {
  /**
   * 初始化日期
   * @param {*} date
   * @return {Date} 继承自Date原型的日期
   */
  initDate(date = new Date()) {
    if (date instanceof Date === false) {
      return new Date(date);
    }
    return date;
  },

  /**
   * 格式化成'yyyy-mm-dd'
   * @param {*} date
   * @return {String} 格式化的日期
   */
  format(date) {
    return this.formatWithPatternDate('yyyy-mm-dd', date);
  },

  /**
   * 自定义格式模板
   * @param {String} format 自定义的格式
   * @param {*} date
   * @return {String} 格式化的日期
   */
  formatWithPatternDate(format, date) {
    if (!date) {
      return null;
    }
    date = this.initDate(date);
    const look = function(m) {
      // Check whether a format character is doubled
      let n = 0;
      while (i + 1 < format.length && format.charAt(i + 1) === m) {
        n++;
        i++;
      }
      return n;
    };
    const f1 = function(m, val, len) {
      // Format a number, with leading zero if necessary
      let n = '' + val;
      if (look(m)) {
        while (n.length < len) {
          n = '0' + n;
        }
      }
      return n;
    };
    let i;
    let output = '';
    let literal = false;

    for (i = 0; i < format.length; i++) {
      if (literal) {
        if (format.charAt(i) === "'" && !look("'")) {
          literal = false;
        } else {
          output += format.charAt(i);
        }
      } else {
        switch (format.charAt(i)) {
          case 'd':
            output += f1('d', date.getDate(), 2);
            break;
          case 'o':
            output += f1(
              'o',
              (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) /
                86400000,
              3
            );
            break;
          case 'm':
            output += f1('m', date.getMonth() + 1, 2);
            break;
          case 'y':
            output += look('y')
              ? date.getFullYear()
              : (date.getFullYear() % 100 < 10 ? '0' : '') +
                (date.getFullYear() % 100);
            break;
          case 'h':
            var h = date.getHours();
            output += f1('h', h > 12 ? h - 12 : h === 0 ? 12 : h, 2);
            break;
          case 'H':
            output += f1('H', date.getHours(), 2);
            break;
          case 'i':
            output += f1('i', date.getMinutes(), 2);
            break;
          case 's':
            output += f1('s', date.getSeconds(), 2);
            break;
          case 'a':
            output += date.getHours() > 11 ? '下午' : '上午';
            break;
          case 'A':
            output += date.getHours() > 11 ? 'PM' : 'AM';
            break;
          case "'":
            if (look("'")) {
              output += "'";
            } else {
              literal = true;
            }
            break;
          default:
            output += format.charAt(i);
        }
      }
    }
    return output;
  },

  /**
   * 获取日期的星期
   * @param {String} dateString 日期
   * @param {String} prefix 前缀是星期/周，默认星期
   * @param {Array} exclude 排除星期几
   * @return {String/null} 星期几/null
   */
  getWeekday(dateString, prefix = '星期', exclude = []) {
    let date;
    const dateArray = dateString.split('-');
    date = new Date(dateArray[0], Number(dateArray[1]) - 1, dateArray[2]);
    const day = '日一二三四五六'.charAt(date.getDay());
    return ~exclude.indexOf(day) ? null : prefix + day;
  },

  /**
   * 获取+-n天后的日期
   * @param {Number} n
   * @return {String} +-n天后的日期
   */
  funDate(n) {
    const date1 = new Date();
    const date2 = new Date(date1);
    date2.setDate(date1.getDate() + n);
    return date2;
  },

  /**
   * 计算当前年龄
   * @param {*} start 格式化的出生年月日 如：1990-01-01
   * @return {String} 当前年龄
   */
  getCurrentAge(start, end = this.format(new Date())) {
    start = start.split('-');
    end = end.split('-');
    const temp =
      (end[0] - start[0]) * 12 +
      (end[1] - start[1]) +
      (end[2] - start[2] >= 0 ? 0 : -1);
    if (temp < 12) {
      return temp + '个月';
    }
    return parseInt(temp / 12) + '岁';
  },

  /**
   * 获取自起始日期开始的n天日期
   * @param {String} start 起始日期
   * @param {String} n 天数，默认7
   * @return {Array} 日期数组
   */
  getDates(start, n = 7) {
    const addDate = (date, n) => {
      date.setDate(date.getDate() + n);
      return date;
    };
    const setDate = (date, n) => {
      const weekdays = [];
      for (let i = 0; i < n; i++) {
        weekdays.push(this.format(i == 0 ? date : addDate(date, 1)));
      }
      return weekdays;
    };
    return setDate(this.initDate(start), n);
  }
};

export default date;

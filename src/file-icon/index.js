import { createNamespace, addUnit } from '../utils';

const [createComponent] = createNamespace('file-icon');
export default createComponent({
  props: {
    name: String,
    size: [Number, String]
  },
  methods: {
    defaultIcon() {
      switch (this.name) {
        case 'doc':
          return 'http://mui.ucmed.cn/images/icon/doc.png';
        case 'eps':
          return 'http://mui.ucmed.cn/images/icon/eps.png';
        case 'jpg':
          return 'http://mui.ucmed.cn/images/icon/jpg.png';
        case 'mp4':
          return 'http://mui.ucmed.cn/images/icon/mp4.png';
        case 'pdf':
          return 'http://mui.ucmed.cn/images/icon/pdf.png';
        case 'png':
          return 'http://mui.ucmed.cn/images/icon/png.png';
        case 'ppt':
          return 'http://mui.ucmed.cn/images/icon/ppt.png';
        case 'psd':
          return 'http://mui.ucmed.cn/images/icon/psd.png';
        case 'qa':
          return 'http://mui.ucmed.cn/images/icon/qa.png';
        case 'rep':
          return 'http://mui.ucmed.cn/images/icon/rep.png';
        case 'xls':
          return 'http://mui.ucmed.cn/images/icon/xls.png';
        case 'zip':
          return 'http://mui.ucmed.cn/images/icon/zip.png';
      }
    }
  },
  render() {
    const { size } = this;
    const contentStyle = {
      width: addUnit(size)
    };
    return (
      <div role="fileIcon">
        <img src={this.defaultIcon()} style={contentStyle}></img>
      </div>
    );
  }
});

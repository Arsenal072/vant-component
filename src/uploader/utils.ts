export type ResultType = 'dataUrl' | 'text' | 'file';

export function toArray<T>(item: T | T[]): T[] {
  if (Array.isArray(item)) {
    return item;
  }

  return [item];
}

/**
 * 产生随机整数，包含下限值，包括上限值
 * @param {Number} lower 下限
 * @param {Number} upper 上限
 * @return {Number} 返回在下限到上限之间的一个随机整数
 */
export function random(lower: Number, upper: Number) {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

export function readFile(file: File, resultType: ResultType) {
  return new Promise(resolve => {
    if (resultType === 'file') {
      resolve();
      return;
    }

    const reader = new FileReader();

    reader.onload = event => {
      resolve((event.target as FileReader).result);
    };

    if (resultType === 'dataUrl') {
      reader.readAsDataURL(file);
    } else if (resultType === 'text') {
      reader.readAsText(file);
    }
  });
}

export function isOversize(files: File | File[], maxSize: number): boolean {
  return toArray(files).some(file => file.size > maxSize);
}

export type FileListItem = {
  url?: string;
  file?: File;
  content?: string; // dataUrl
  isImage?: boolean;
};

const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;

export function isImageUrl(url: string): boolean {
  return IMAGE_REGEXP.test(url);
}

export function isImageFile(item: FileListItem): boolean {
  // some special urls cannot be recognized
  // user can add `isImage` flag to mark it as an image url
  if (item.isImage) {
    return true;
  }

  if (item.file && item.file.type) {
    return item.file.type.indexOf('image') === 0;
  }

  if (item.url) {
    return isImageUrl(item.url);
  }

  if (item.content) {
    return item.content.indexOf('data:image') === 0;
  }

  return false;
}

import { TinyColor } from "@ctrl/tinycolor";

export default class ColorUtils {
  constructor(colorVal) {
    this.value = colorVal;
    this.color = new TinyColor(this.value);
  }

  hoverColorFromOptions(options) {
    let newIdx = 0;
    if (this.color.isLight()) {
      newIdx -= 2;
    } else {
      newIdx += 2;
    }
    const currentOption = options.find(p => p.value === this.value);
    const currentIdx = options.indexOf(currentOption);
    newIdx = currentIdx + newIdx;
    if (newIdx <= 0 || newIdx >= options.length) {
      // handle ends
      if (newIdx < 0) {
        newIdx = options.length - newIdx;
      } else {
        newIdx = 0 + newIdx;
      }
    }
    return options[newIdx].text;
  }

  textColor() {
    if (this.color.isLight()) {
      return "black";
    } else {
      return "white";
    }
  }
}

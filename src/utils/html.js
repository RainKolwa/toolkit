/**
 * 移除HTML标签
 * @param {String} content html
 */
export const removeTag = (content) => {
  return typeof content === "string"
    ? content.replace(/<\/?[a-zA-Z!].*?>+/gm, "")
    : "";
};

/**
 * 移除内联样式表
 * @param {String} content html
 */
export const removeStyle = (content) => {
  return typeof content === "string"
    ? content.replace(/<style[\s\S]*?<\/style>/gm, "")
    : "";
};

/**
 * 移除空行
 * @param {String} content html
 */
export const removeBlankLine = (content) => {
  return typeof content === "string" ? content.replace(/\s+[\r\n]/g, "\n") : "";
};

/**
 * 移除一行中开头的空白
 */
export const trimStart = (content) => {
  return typeof content === "string" ? content.replace(/^\s*/gm, "") : "";
};

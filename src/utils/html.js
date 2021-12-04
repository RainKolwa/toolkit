/**
 * 移除HTML标签
 * @param {*} content : ;
 */
export const removeTag = content => {
	return typeof content === 'string' ? content.replace(/\<\/?[a-zA-Z].*?\>+/gm, '') : ''
}

/**
 * 移除内联样式表
 */
export const removeStyle = content => {
	return typeof content === 'string' ? content.replace(/\<style.*?\>.*?\<\/style\>/gm, '') : ''
}
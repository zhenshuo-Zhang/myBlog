// 打字机效果脚本
document.addEventListener('DOMContentLoaded', function() {
  // 查找标题元素
  const titleElements = document.querySelectorAll('.cover-body .title');
  
  if (titleElements.length > 0) {
    titleElements.forEach(function(titleElement) {
      const originalText = titleElement.textContent;
      titleElement.textContent = '';
      
      // 添加闪烁的光标
      const cursor = document.createElement('span');
      cursor.className = 'typewriter-cursor';
      cursor.textContent = '|';
      titleElement.appendChild(cursor);
      
      // 逐个字符显示文本
      let i = 0;
      const typeInterval = setInterval(function() {
        if (i < originalText.length) {
          // 在光标前插入字符
          titleElement.insertBefore(document.createTextNode(originalText.charAt(i)), cursor);
          i++;
        } else {
          clearInterval(typeInterval);
        }
      }, 150); // 调整速度
    });
  }
});
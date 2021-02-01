/* API S */

// 带 url 参数表示创建书签
/*
chrome.bookmarks.create(
  {
    parentId: '1',
    index: 0,
    title: 'Google',
    url: 'https://www.google.com'
  },
  function (bookmark) {
    console.log('bookmark', bookmark)
  }
)
 */

// 带 url 参数表示创建书签文件夹
/*
chrome.bookmarks.create(
  {
    parentId: '1',
    index: 0,
    title: 'Google'
  },
  function (bookmark) {
    console.log('bookmark', bookmark)
  }
)
 */

// 搜索匹配的条件只能字符串
// chrome.bookmarks.search('google', function (bookmarkArray) {
//   console.log(bookmarkArray)
// })

// 返回指定节点不包含children属性的书签对象数组，指定的节点可以是一个或多个
// chrome.bookmarks.get(['667'], function (bookmarkArray) {
//   console.log(bookmarkArray)
// })

/**
 * 获得用户完整的书签树，但请注意，如果用户的书签树结构过于复杂或内容过多，
 * getTree方法的效率会很低，而且也会消耗较多的资源，
 * 所以请考虑使用后面的方法按需获取部分书签树
 */
// chrome.bookmarks.getTree(function (bookmarkArray) {
//   console.log(bookmarkArray)
// })

/**
 * 返回以指定节点为父节点的下一级书签节点，但不包括再下一级的节点，
 * 也就是说返回的书签对象不包括children属性，无论它是否具有子节点。
 * 通过这个方法我们可以一层一层地按需获取用户的书签结构。
 * 下面的方法获取了根节点的所有子节点
 */
// chrome.bookmarks.getChildren('0', function (bookmarkArray) {
//   console.log(bookmarkArray)
// })

/**
 * 返回自指定节点开始包括当前节点及向下的所有节点，
 * 这个方法与getChildren的区别是返回值会包含父节点，
 * 且没有层级限制，即包含书签对象的children属性。
 * 下面的代码返回的结果与getTree方法返回的结果相同
 */
// chrome.bookmarks.getSubTree('0', function (bookmarkArray) {
//   console.log(bookmarkArray)
// })

// 获取最近添加的多个书签
// chrome.bookmarks.getRecent(5, function (bookmarkArray) {
//   console.log(bookmarkArray)
// })

/* chrome.bookmarks.update(
  '667',
  {
    title: 'Gmail',
    url: 'https://mail.google.com/'
  },
  function (bookmark) {
    console.log(bookmark)
  }
) */

/* chrome.bookmarks.move(
  '667',
  {
    parentId: '74',
    index: 4
  },
  function (bookmark) {
    console.log(bookmark)
  }
) */

// 移除书签
// chrome.bookmarks.remove('667', function(){
//   console.log('Bookmark 667 has been removed.');
// });

// 移除书签文件夹
/* chrome.bookmarks.removeTree('668', function () {
  console.log('Bookmark group 668 has been removed.')
}) */

/* API E */

/* Event S */
// 监控书签的创建行为
// chrome.bookmarks.onCreated.addListener(function (bookmarkId) {
//   console.log(bookmarkId)
// })

// 监控书签的移除行为

// removeInfo: {
//   index: 0,
//   node: {
//     dateAdded: 1611733899296
//     id: "671"
//     title: "Google"
//     url: "https://www.google.com/"
//   },
//   parentId: "1"
// }
// chrome.bookmarks.onRemoved.addListener(function(id, removeInfo){
//   console.log('Bookmark '+id+' has been removed:');
//   console.log(removeInfo);
// });

// 监控书签的更新行为
// changeInfo包含title和url属性，与所更改书签对象更新后的属性相对应
// chrome.bookmarks.onChanged.addListener(function(id, changeInfo){
//   console.log('Bookmark '+id+' has been changed:');
//   console.log(changeInfo);
// });

// 监控书签的移动行为
// moveInfo包含parentId、index、oldParentId和oldIndex属性，与所移动书签对象移动前后的属性相对应
/* chrome.bookmarks.onMoved.addListener(function(id, moveInfo){
  console.log('Bookmark '+id+' has been moved:');
  console.log(moveInfo);
}); */

//监控一个书签分组下的更改子节点顺序的行为
// reorderInfo是包含顺序更改后子节点id的数组
// chrome.bookmarks.onChildrenReordered.addListener(function(id, reorderInfo){
//   console.log('Bookmark '+id+' has a new children order:');
//   console.log(reorderInfo);
// });

// 监控导入书签开始
// onImportBegan(function () {
//   console.log('Bookmark import began.')
// })

// 监控导入书签结束
// onImportEnded(function () {
//   console.log('Bookmark import ended.')
// })

// 请注意，如果检测到浏览器正在导入书签（onImportBegan事件被触发但onImportEnded事件还未被触发），
// 应当忽略onCreated事件，但其他的操作可以被立即执行
/* Event E */

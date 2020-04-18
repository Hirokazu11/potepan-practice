function replace() {
	var newList = document.createElement('li');
	newList.setAttribute('id', 'newList');
	var newText = document.createTextNode('新しい要素です');
	newList.appendChild(newText);
	var oldList = document.getElementById('oldList');
	// var parentNode = oldList.parentNode;
	// parentNode.replaceChild(newList, oldList);
//ここから解答コピペ
	var parentNode = oldList.parentNode;
  parentNode.replaceChild(newList, oldList);
}
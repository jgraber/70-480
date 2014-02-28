var $draggedItem;
$(document).ready(function () {
    $('.item').on('dragstart', dragging);
    $('.item').on('dragend', draggingEnded);
    $('.hole').on('dragenter', preventDefault);
    $('.hole').on('dragover', dragOver);
    $('.hole').on('dragleave', dragLeave);
    $('.hole').on('drop', dropItem);
});
function dragging(e) {
    $(e.target).addClass('dragging');
    $draggedItem = $(e.target);
}
function draggingEnded(e) {
    $(e.target).removeClass('dragging');
}
function dragOver(e){
    $(e.target).addClass('over');
    e.preventDefault();
}
function dragLeave(e){
    $(e.target).removeClass('over');
    e.preventDefault();
}
function preventDefault(e) {
    e.preventDefault();
}
function dropItem(e) {
    var hole = $(e.target);
    if (hole.hasClass('hole') && hole.children().length == 0) {
        $draggedItem.detach();
        $draggedItem.appendTo($(e.target));
    }
    $(e.target).removeClass('over');
}
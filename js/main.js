$('.course-shown-checkbox').change(function() {
    let blockCourse = $(this).closest('.inl-block-courses');

    if ($(this).prop("checked")) {
        fadeBlockCourse(blockCourse);
    }
});

function fadeBlockCourse(blockCourse) {
    $('.block-courses-fade', blockCourse).animate({'height': $(blockCourse).height() + 'px'}, '0px', function(){
        setTimeout(function(){
            $(blockCourse).hide();
            if (isAllChecked()) {
                showCompleteMessage();
            }
        }, 1000);

    });

}

function isAllChecked() {
    return $('.course-shown-checkbox').length === $('.course-shown-checkbox:checked').length;
}

function showCompleteMessage() {
    $('.task-completed').show();
    $('.container-courses-blocks').hide();
}


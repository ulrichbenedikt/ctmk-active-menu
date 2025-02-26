document.addEventListener('click', function(event) {
    let target = event.target;
    while (target && !target.getAttribute('ctmk-tab-link')) {
        target = target.parentElement;
    }
    if (target) {
        const navigateUrl = target.getAttribute('ctmk-tab-link');
        if (navigateUrl) {
            event.preventDefault();
            window.open(navigateUrl,'_self')
        }
    }
});
function addActiveClass($this){
    $this.closest('[ctmk-menu]').find('.w-dropdown-toggle').addClass('ctmk-active')
}
$('[ctmk-child]').each(function(){
    if($(this).is('[ctmk-tab-link]')){
        if($(this).attr('ctmk-tab-link') == window.location.pathname){
            addActiveClass($(this))
        }
    } else {
        addActiveClass($(this))
    }
})

let color = undefined
$(document).ready(function(){


/**
 * Listener
 */
$('#btn').on('click', function(){
    onClickMeClicked()
})
})
/**
 *  Controller
 * Actions taken after 'Click Me' button clicked
 */
function onClickMeClicked(){
    updateBg()
}

/**
 * Model
 * Gets a color and updates the UI backround
 */

function updateBg() {
    color = getBgColor()
    showBgColor(color)
}

/**
 * Chooses, randomly, a color from a standard list 
 * @returns the bckground color
 */

function getBgColor(){
    const colors = [ 'Black', 'red', 'green','blue','white']
    return colors [Math.floor(Math.random() * colors.length)]
}

/**
 * View
 * Fills the values of the corresponding UI elements.
 * @param {string} bgcolor -the given color 
 */

function showBgColor(bgColor){
    $('#hex').html(bgColor)
    $('body').css('background-color', bgColor)
}


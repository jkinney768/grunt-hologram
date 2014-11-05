
$(document).ready(function () {
	
	
	// apply click actions to all checkboxes
	$( ".checkbox--buttonStyle" ).on( "click", function() {
		ToggleCheckState(this.id);
	});

	// apply  to all radio buttons
	$( ".radioButton--buttonStyle" ).on( "click", function() {
		ToggleRadioGroupState(this.id);
	});
	
});

// function to toggle an individual checkbox-button state
function ToggleCheckState(control)
{
	var IsChecked = $("#" + control).parent().hasClass('checked');
	
	if(IsChecked == 1)
	{
		$( '#' + control).parent().removeClass('checked');
		
	}
	else
	{
		$( '#' + control).parent().addClass('checked');	
		
	}

}

// function to toggle the display state of radio-buttons in a radio group
function ToggleRadioGroupState(control)
{
	// find the radio group that this control belongs to
	var groupname = $('#' + control).attr('name');
		
	// Make sure all unchecked radio buttons are styled correctly
	$("input[type=radio][name='" + groupname + "']:not(:checked)").parent().removeClass('checked');
	
	// Make sure all checked radio buttons are styled correctly
	$("input[type=radio][name='" + groupname + "']:checked").parent().addClass('checked');
	
   var label = $("label[for='"+$(control).attr('id')+"']");
   
   
}


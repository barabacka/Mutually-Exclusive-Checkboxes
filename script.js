//V2.0: conditions
memory = false;

function toggleCheckboxes() {
    const checkbox1 = document.getElementById ( 'checkbox1' );
    const checkbox2 = document.getElementById ( 'checkbox2' );

    if ( checkbox1.checked && checkbox2.checked )
    {
        checkbox2.checked = memory;
        checkbox1.checked = !memory;
    }
    memory = checkbox1.checked;
}

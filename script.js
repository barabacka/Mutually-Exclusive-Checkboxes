//V1.0: logical function
previous1 = false;
previous2 = false;

function toggleCheckboxes() {
    const checkbox1 = document.getElementById ( 'checkbox1' );
    const checkbox2 = document.getElementById ( 'checkbox2' );

    y1 = ( checkbox1.checked && !checkbox2.checked ) || ( !previous1 && checkbox1.checked );
    y2 = ( checkbox2.checked && !checkbox1.checked ) || (  previous1 && checkbox2.checked );
    previous1         = y1;
    checkbox1.checked = y1;
    previous2         = y2;
    checkbox2.checked = y2;
}

<?php
$myday=arry('Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье');
$today=getdate();
$day=$today[wday];
echo $myday[$day];
?>
<table border=1 cellspacing=0>

  <?php
  for ($a = 1; $a < 10; $a++) {
    echo '<tr>';
    for ($b = 1; $b < 10; $b++) {
      echo '<td>' . $a * $b . '</td>';
    }
    echo '</tr>';
  }
  ?>
</table>

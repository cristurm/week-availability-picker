export default function checkAllFromIdFragment (period) {
  const periodCheckboxes = document.querySelectorAll("input[id$='" + period + "']")
  const everyCheckBoxIsLikeTheFirst = [...periodCheckboxes].every(checkbox => checkbox.checked === periodCheckboxes[0].checked)

  if (everyCheckBoxIsLikeTheFirst) {
    // toggle everything
    periodCheckboxes.forEach(checkbox => checkbox.checked = !checkbox.checked)
  } else {
    // copy first one to the rest
    periodCheckboxes.forEach(checkbox => checkbox.checked = periodCheckboxes[0].checked)
  }
}

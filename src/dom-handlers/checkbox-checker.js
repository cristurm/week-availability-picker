export default function checkAllFromIdFragment (idFragment) {
  const allCheckboxes = document.querySelectorAll("input[id*='" + idFragment + "']")
  const everyCheckBoxIsLikeTheFirst = [...allCheckboxes].every(checkbox => checkbox.checked === allCheckboxes[0].checked)

  if (everyCheckBoxIsLikeTheFirst) {
    // toggle everything
    allCheckboxes.forEach(checkbox => checkbox.checked = !checkbox.checked)
  } else {
    // copy first one to the rest
    allCheckboxes.forEach(checkbox => checkbox.checked = allCheckboxes[0].checked)
  }
}

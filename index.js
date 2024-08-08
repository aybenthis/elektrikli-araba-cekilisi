function lottery(applicants) {
  let selected = [];
  let selectedSet = new Set();

  selected = selected.concat(applicants.slice(0, 5));
  selectedSet = new Set(selected);

  for (let i = 9; i < applicants.length; i += 10) {
    if (selected.length < 10) {
      if (!selectedSet.has(applicants[i])) {
        selected.push(applicants[i]);
        selectedSet.add(applicants[i]);
      }
    }
  }

  while (true) {
    let randomIndex = Math.floor(Math.random() * applicants.length);
    if (!selectedSet.has(applicants[randomIndex])) {
      selected.push(applicants[randomIndex]);
      break;
    }
  }

  return selected;
}

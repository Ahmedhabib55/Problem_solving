// first step define myTxt and split on string and split from [A-z]
// second step create regex (?= is means equal in parentheses )
// third step  my regex (?=[A-Z])
// fourth step join my string
// this is my solution

function cap_space(txt) {
  const myTxt = txt.split(/(?=[A-Z])/);
  const lowercased = myTxt.map((txt) => txt.toLowerCase());
  return lowercased.join(" ");
}

console.log(cap_space("wePlayTennis"));





IAmAhmedHassanAilIsYouCanBe 
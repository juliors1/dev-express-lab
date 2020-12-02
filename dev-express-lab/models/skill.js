const skills = [
  { id: 123, skill: "html", done: true },
  { id: 1234, skill: "css", done: true },
  { id: 12345, skill: "javascript", done: true },
  { id: 123456, skill: "node", done: false },
];

module.exports = {
  getAllSkills,
  getOne,
  create,
  deleteOne,
  update
};
function getAllSkills() {
  return skills;
}

function getOne(id) {
  return skills.find((skill) => skill.id === parseInt(id));
}
function create(skill) {
  skill.id = Date.now() * 100000;
  skill.done = false;
  skills.push(skill);
}

function deleteOne(id) {
  const idx = skills.findIndex((skill) => skill.id === parseInt(id));
  skills.splice(idx, 1);
}

function update(id, newSkill) {
  const idx = skills.findIndex((skill) => skill.id === parseInt(id));
  skills(idx).skill = newSkill.skill
  skills(idx).done = newSkill.done === 'on' ? true : false
}

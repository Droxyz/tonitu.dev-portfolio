
export default function Skills(props) {
  const skills = props.cvData.aboutMe.skills;

  return (
    <div className="max-w-4xl p-5">
      <h1 className="font-bold mb-10">My Skills</h1>
      {skills.map((skillCategory, index) => (
        <div key={index} className="mb-8">
          <h2 className="mb-2 font-semibold">{skillCategory.category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategory.items.map((skill, index) => (
              <div key={index} className="flex items-center bg-[var(--background2)] p-4 rounded-lg shadow">
                <div className="flex-grow">
                  <h4 className="font-semibold">{skill.name}</h4>
                  <p className="text-sm">{skill.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}


import React from 'react';
import { Skill } from '../types';

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-slate-800">{skill.name}</span>
        <span className="text-[10px] px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded font-bold uppercase tracking-tighter">
          {skill.category}
        </span>
      </div>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map(i => (
          <div 
            key={i} 
            className={`h-1.5 flex-grow rounded-full transition-colors duration-500 ${
              i <= skill.level ? 'bg-blue-500 group-hover:bg-blue-600' : 'bg-slate-100'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillBadge;

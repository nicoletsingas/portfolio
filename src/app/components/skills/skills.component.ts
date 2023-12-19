import { Component } from '@angular/core';
import { skillsData } from 'src/app/skills-data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = skillsData;

  getSkilColor(skillName: string){
    const skill = this.skills.find(skill => skill.name === skillName);
    return skill ? skill.color: '#FFFFFF';
  };
  
}

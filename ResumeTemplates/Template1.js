function buildResume(data) {
    const resume = document.createElement('div');
    resume.id = 'resume';
    resume.className = 'max-w-[700px] mx-auto p-8 border border-gray-300 shadow-md text-sm';
  
    // Personal Information
    const personalInfoSection = createPersonalInfoSection(data.basics);
    if (personalInfoSection) resume.appendChild(personalInfoSection);
  
    // Education
    const educationSection = createEducationSection(data.education);
    if (educationSection) resume.appendChild(educationSection);
  
    // Experience
    const experienceSection = createExperienceSection(data.work);
    if (experienceSection) resume.appendChild(experienceSection);
  
    // Skills
    const skillsSection = createSkillsSection(data.skills);
    if (skillsSection) resume.appendChild(skillsSection);
  
    // Projects
    const projectsSection = createProjectsSection(data.projects);
    if (projectsSection) resume.appendChild(projectsSection);
  
    // Languages
    const languagesSection = createLanguagesSection(data.languages);
    if (languagesSection) resume.appendChild(languagesSection);
  
    // Interests
    const interestsSection = createInterestsSection(data.interests);
    if (interestsSection) resume.appendChild(interestsSection);
  
    document.getElementById('resume-container').appendChild(resume);
  }
  
  // Call the function to build the resume
  buildResume(resumeData);
  
  function createPersonalInfoSection(data) {
      const section = document.createElement('section');
      section.className = 'text-center mb-8';
    
      const createEl = (tag, className, content) => {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (content) el.textContent = content;
        return el;
      };
    
      // Name
      if (data.name) {
        section.appendChild(createEl('h1', 'text-2xl font-bold mb-4', data.name.toUpperCase()));
      }
    
      // Address
      if (data.location && data.location.address) {
        section.appendChild(createEl('p', 'mb-2', data.location.address));
      }
    
      // Contact info
      const contactInfo = [
        data.location ? `${data.location.city || ''}, ${data.location.countryCode || ''}`.trim() : '',
        data.phone
      ].filter(Boolean);
    
      if (contactInfo.length) {
        const contactDiv = createEl('div', 'mb-2');
        contactDiv.innerHTML = contactInfo.join(' • ');
        section.appendChild(contactDiv);
      }
    
      // Links
      const links = [
        data.email ? { text: 'Email', url: `mailto:${data.email}` } : null,
        ...(data.profiles || []).map(profile => ({
          text: profile.network,
          url: profile.url
        })),
        data.linkedin ? { text: 'LinkedIn', url: data.linkedin } : null
      ].filter(Boolean);
    
      if (links.length) {
        const linksDiv = createEl('div', '');
        links.forEach((link, index) => {
          const a = createEl('a', 'text-blue-600 hover:underline', link.text);
          a.href = link.url;
          a.target = '_blank';
          linksDiv.appendChild(a);
          if (index < links.length - 1) {
            linksDiv.appendChild(document.createTextNode(' • '));
          }
        });
        section.appendChild(linksDiv);
      }
    
      return section;
    }
    
  function createEducationSection(data) {
    if (!data || data.length === 0) return null;
  
    const section = document.createElement('section');
    section.className = 'mb-6';
  
    const heading = document.createElement('h2');
    heading.className = 'text-xl font-bold mb-3 uppercase';
    heading.textContent = 'Education';
    section.appendChild(heading);
  
    // Use the first education entry in the array
    const edu = data[0];
  
    const eduDiv = document.createElement('div');
    eduDiv.className = 'mb-2';
  
    const institutionDiv = document.createElement('div');
    institutionDiv.className = 'flex justify-between items-baseline';
  
    const institutionName = document.createElement('span');
    institutionName.className = 'font-bold';
    institutionName.textContent = edu.institution;
    institutionDiv.appendChild(institutionName);
  
    if (edu.endDate) {
      const dateSpan = document.createElement('span');
      dateSpan.className = 'text-right';
      dateSpan.textContent = edu.endDate;
      institutionDiv.appendChild(dateSpan);
    }
  
    eduDiv.appendChild(institutionDiv);
  
    const degreeDiv = document.createElement('div');
    degreeDiv.className = 'italic';
    degreeDiv.textContent = `${edu.studyType} in ${edu.area}`;
    eduDiv.appendChild(degreeDiv);
  
    if (edu.score) {
      const gpaDiv = document.createElement('div');
      gpaDiv.textContent = `GPA: ${edu.score}`;
      eduDiv.appendChild(gpaDiv);
    }
  
    if (edu.courses && edu.courses.length > 0) {
      const coursesHeading = document.createElement('div');
      coursesHeading.className = 'font-bold mt-2';
      coursesHeading.textContent = 'Relevant Courses:';
      eduDiv.appendChild(coursesHeading);
  
      const coursesList = document.createElement('ul');
      coursesList.className = 'list-disc pl-5';
      edu.courses.forEach(course => {
        const courseItem = document.createElement('li');
        courseItem.textContent = course;
        coursesList.appendChild(courseItem);
      });
      eduDiv.appendChild(coursesList);
    }
  
    section.appendChild(eduDiv);
    return section;
  }
  
  function createExperienceSection(data) {
    if (!data || data.length === 0) return null;
  
    const section = document.createElement('section');
    section.className = 'mb-6';
  
    const heading = document.createElement('h2');
    heading.className = 'text-xl font-bold mb-3 uppercase';
    heading.textContent = 'Work experience';
    section.appendChild(heading);
  
    data.forEach((exp, index) => {
      const expDiv = document.createElement('div');
      expDiv.className = 'mb-3';
  
      const headerDiv = document.createElement('div');
      headerDiv.className = 'flex justify-between items-baseline mb-1';
  
      if (exp.name) {
        const companySpan = document.createElement('span');
        companySpan.className = 'font-bold';
        companySpan.textContent = exp.name;
        headerDiv.appendChild(companySpan);
      }
  
      if (exp.startDate && exp.endDate) {
        const dateSpan = document.createElement('span');
        dateSpan.className = 'text-right';
        dateSpan.textContent = `${exp.startDate} - ${exp.endDate}`;
        headerDiv.appendChild(dateSpan);
      }
  
      expDiv.appendChild(headerDiv);
  
      const detailsDiv = document.createElement('div');
      detailsDiv.className = 'flex justify-between items-baseline mb-1';
  
      if (exp.position) {
        const positionSpan = document.createElement('span');
        positionSpan.className = 'italic';
        positionSpan.textContent = exp.position;
        detailsDiv.appendChild(positionSpan);
      }
  
      if (exp.location) {
        const locationSpan = document.createElement('span');
        locationSpan.className = 'text-right';
        locationSpan.textContent = exp.location;
        detailsDiv.appendChild(locationSpan);
      }
  
      expDiv.appendChild(detailsDiv);
  
      if (exp.highlights && exp.highlights.length > 0) {
        const ulElement = document.createElement('ul');
        ulElement.className = 'list-disc pl-5 mt-1';
        exp.highlights.forEach(highlight => {
          const liElement = document.createElement('li');
          liElement.textContent = highlight;
          ulElement.appendChild(liElement);
        });
        expDiv.appendChild(ulElement);
      }
  
      section.appendChild(expDiv);
    });
  
    return section.childNodes.length > 1 ? section : null;
  }
  
  function createProjectsSection(data) {
    if (!data || data.length === 0) return null;
  
    const section = document.createElement('section');
    section.className = 'mb-6';
  
    const heading = document.createElement('h2');
    heading.className = 'text-xl font-bold mb-3 uppercase';
    heading.textContent = 'Projects';
    section.appendChild(heading);
  
    data.forEach((project, index) => {
      const projectDiv = document.createElement('div');
      projectDiv.className = 'mb-2';
  
      const headerDiv = document.createElement('div');
      headerDiv.className = 'flex justify-between items-baseline';
  
      if (project.name) {
        const nameSpan = document.createElement('span');
        nameSpan.className = 'font-bold';
        
        if (project.url) {
          const linkElement = document.createElement('a');
          linkElement.href = project.url;
          linkElement.target = '_blank';
          linkElement.textContent = project.name;
          linkElement.className = 'text-blue-600 hover:underline';
          nameSpan.appendChild(linkElement);
        } else {
          nameSpan.textContent = project.name;
        }
        
        headerDiv.appendChild(nameSpan);
      }
  
      projectDiv.appendChild(headerDiv);
  
      if (project.description) {
        const descriptionList = document.createElement('ul');
        descriptionList.className = 'list-disc pl-5 mt-1';
        const descriptionItem = document.createElement('li');
        descriptionItem.textContent = project.description;
        descriptionList.appendChild(descriptionItem);
        projectDiv.appendChild(descriptionList);
      }
  
      section.appendChild(projectDiv);
  
      if (index < data.length - 1) {
        const spacer = document.createElement('div');
        spacer.className = 'h-1';
        section.appendChild(spacer);
      }
    });
  
    return section;
  }
  
  function createAchievementsSection(data) {
    
  }
  
  function createCertificationsSection(data) {
  
  }
  
  function createLanguagesSection(data) {
    // Implementation here
  }
  
  function createInterestsSection(data) {
    // Implementation here
  }
  
  function createSkillsSection(data) {
    if (!data || data.length === 0) return null;
  
    const section = document.createElement('section');
    section.className = 'mb-6';
  
    const heading = document.createElement('h2');
    heading.className = 'text-xl font-bold mb-3 uppercase';
    heading.textContent = 'Technical Skills';
    section.appendChild(heading);
  
    const skillsList = document.createElement('ul');
    skillsList.className = 'list-none pl-0';
  
    data.forEach(skillCategory => {
      const listItem = document.createElement('li');
      listItem.className = 'mb-2';
  
      const categoryName = document.createElement('span');
      categoryName.className = 'font-bold';
      categoryName.textContent = `${skillCategory.name}: `;
      listItem.appendChild(categoryName);
  
      const skillsSpan = document.createElement('span');
      skillsSpan.textContent = skillCategory.keywords.join(', ');
      listItem.appendChild(skillsSpan);
  
      skillsList.appendChild(listItem);
    });
  
    section.appendChild(skillsList);
    return section;
  }
  
  function generateResume(resumeData) {
      document.documentElement.lang = 'en';
      document.head.innerHTML = `
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Dynamic Resume</title>
          <link rel="stylesheet" href="css/tailwind.min.css">
          <style>
              body {
                  background-color: #f0f0f0;
                  margin: 0;
                  padding: 0;
                  display: flex;
                  justify-content: center;
                  align-items: flex-start;
                  min-height: 100vh;
              }
              .resume {
                  background-color: white;
                  box-shadow: 0 0 10px rgba(0,0,0,0.1);
                  max-width: 850px;
                  width: 100%;
                  box-sizing: border-box;
                  min-height: calc(100vh - 40px);
                  overflow: auto;
              }
              @media print {
                  body {
                      background-color: white;
                      margin: 0;
                      padding: 0;
                  }
                  .resume {
                      box-shadow: none;
                      min-height: auto;
                  }
                  section {
                      page-break-inside: avoid;
                      break-inside: avoid;
                  }
              }
          </style>
      `;
  
      // Create the body content
      document.body.innerHTML = '<div id="resume-container" class="resume"></div>';
  
      // Call the function to build the resume
      buildResume(resumeData);
  }
  
  // Make generateResume globally available
  window.generateResume = generateResume;
  
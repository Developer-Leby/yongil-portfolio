function loadMainProejcts(type, projects) {    
    let html = '';

    for (let project of projects) {            
        let skillHtml = '';
        for (let skill of project.skill) {
            skillHtml += ' ';
            if (skill === 'javascript') skillHtml += JAVASCRIPT;
            else if (skill === 'vue') skillHtml += VUE;
            else if (skill === 'angular') skillHtml += ANGULAR;
            else if (skill === 'spring') skillHtml += SPRING;
            else if (skill === 'spring boot') skillHtml += SPRING_BOOT;
            else if (skill === 'jquery') skillHtml += JQUERY;
            else if (skill === 'objective-c') skillHtml += OBJECTIVE_C;
            else if (skill === 'gulp') skillHtml += GULP;
            else if (skill === 'react-native') skillHtml += REACT_NATIVE;
            else if (skill === 'android') skillHtml += ANDROID;
            else if (skill === 'ios') skillHtml += iOS;
            else if (skill === 'c++') skillHtml += C_PLUS_PLUS;
            else if (skill === 'docker') skillHtml += DOCKER;
            else if (skill === 'mariadb') skillHtml += MARIA_DB;
            else if (skill === 'java') skillHtml += JAVA;
            else if (skill === 'ffmpeg') skillHtml += FFMPEG;
            else if (skill === 'c#') skillHtml += C_SHARP;
            else if (skill === 'power-builder') skillHtml += POWER_BUILDER;
            else if (skill === 'mitel') skillHtml += MITEL;
            else if (skill === 'mfc') skillHtml += MFC;
            else if (skill === 'swift') skillHtml += SWIFT;
            else if (skill === 'kotlin') skillHtml += KOTLIN;
            else if (skill === 'realm') skillHtml += REALM
            else if (skill === 'php') skillHtml += PHP
            else if (skill === 'smtp') skillHtml += SMTP
            else if (skill === 'win-api') skillHtml += WIN_API
            else if (skill === 'swing') skillHtml += SWING
            else if (skill === 'tcp') skillHtml += TCP
            else if (skill === 'udp') skillHtml += UDP
            else if (skill === 'c') skillHtml += C_LANGUAGE
        }

        const template = `
            <div class="col-md-4 pt-4 mb-4 d-flex">
                <div class="blog-entry justify-content-end" style="flex: 0 0 100%;">
                    <img class="block-20 border align-items-stretch" src="${project.thumbnail}" style="width: 100%; height: 200px; object-fit: cover;" />
                    <div class="text mt-3 float-right d-block">                        
                        <span class="text-dark font-weight-bold mb-0" style="width: 100%; font-size: 14px;" title="${project.title}">
                            ${project.title}
                        </span>
                        <p class="mb-0">
                            <span class="text-primary">${project.company}</span>
                        </p>
                        <p class="mb-0">
                            <span class="mr-2">${project.date}</span>
                        </p>
                        <p class="mb-0">
                            ${skillHtml}
                        </p>
                    </div>
                </div>
            </div>
        `
        html += template
    }
    if (type === 'main') {
        document.getElementById('main-projects').innerHTML = html;
    } else if (type === 'sub') {
        document.getElementById('sub-projects').innerHTML = html;
    }
    
}

function showProjectList() {
    loadMainProejcts('main', mainProjects);
    loadMainProejcts('sub', subProjects);
}

$(function() {
    showProjectList();

    window.addEventListener('resize', () => {
        showProjectList();
    })
});
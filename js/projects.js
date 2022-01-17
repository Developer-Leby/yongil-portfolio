class Project {
    constructor() {
        this.type = '';
        this.index = 0;
        this.swiper = null;
    }

    getSkillTags(skills) {
        let returnHtml = '';
        for (let skill of skills) {
            returnHtml += ' ';
            if (skill === 'javascript') returnHtml += JAVASCRIPT;
            else if (skill === 'vue') returnHtml += VUE;
            else if (skill === 'angular') returnHtml += ANGULAR;
            else if (skill === 'spring') returnHtml += SPRING;
            else if (skill === 'spring boot') returnHtml += SPRING_BOOT;
            else if (skill === 'jquery') returnHtml += JQUERY;
            else if (skill === 'objective-c') returnHtml += OBJECTIVE_C;
            else if (skill === 'gulp') returnHtml += GULP;
            else if (skill === 'react-native') returnHtml += REACT_NATIVE;
            else if (skill === 'android') returnHtml += ANDROID;
            else if (skill === 'ios') returnHtml += iOS;
            else if (skill === 'c++') returnHtml += C_PLUS_PLUS;
            else if (skill === 'docker') returnHtml += DOCKER;
            else if (skill === 'mariadb') returnHtml += MARIA_DB;
            else if (skill === 'java') returnHtml += JAVA;
            else if (skill === 'ffmpeg') returnHtml += FFMPEG;
            else if (skill === 'c#') returnHtml += C_SHARP;
            else if (skill === 'power-builder') returnHtml += POWER_BUILDER;
            else if (skill === 'mitel') returnHtml += MITEL;
            else if (skill === 'mfc') returnHtml += MFC;
            else if (skill === 'swift') returnHtml += SWIFT;
            else if (skill === 'kotlin') returnHtml += KOTLIN;
            else if (skill === 'realm') returnHtml += REALM;
            else if (skill === 'php') returnHtml += PHP;
            else if (skill === 'smtp') returnHtml += SMTP;
            else if (skill === 'win-api') returnHtml += WIN_API;
            else if (skill === 'swing') returnHtml += SWING;
            else if (skill === 'tcp') returnHtml += TCP;
            else if (skill === 'udp') returnHtml += UDP;
            else if (skill === 'c') returnHtml += C_LANGUAGE;
            else if (skill === 'centos') returnHtml += CENTOS;
            else if (skill === 'unix') returnHtml += UNIX;
            else if (skill === 'windows_10') returnHtml += WINDOWS_10;
            else if (skill === 'windows_7') returnHtml += WINDOWS_7;
            else if (skill === 'unix') returnHtml += UNIX;
            else if (skill === 'vs2003') returnHtml += VS2003;
            else if (skill === 'vs2010') returnHtml += VS2010;
            else if (skill === 'vs2017') returnHtml += VS2017;
            else if (skill === 'jenkins') returnHtml += JENKINS;
            else if (skill === 'macos') returnHtml += MACOS;
            else if (skill === 'svn') returnHtml += SVN;
            else if (skill === 'git') returnHtml += GIT;
            else if (skill === 'xcode') returnHtml += XCODE;
            else if (skill === 'mybatis') returnHtml += MYBATIS;
            else if (skill === 'windows_server_2016') returnHtml += WINDOWS_SERVER_2016;
            else if (skill === 'quartz') returnHtml += QUARTZ;
            else if (skill === 'aws') returnHtml += AWS;
            else if (skill === 'select') returnHtml += SELECT;
            else if (skill === 'websocket') returnHtml += WEBSOCKET;
            else if (skill === 'mssql') returnHtml += MSSQL;
            else if (skill === 'bootstrap') returnHtml += BOOTSTRAP;
            else if (skill === 'indexeddb') returnHtml += INDEXED_DB;
            else if (skill === 'sqlite') returnHtml += SQLITE;
            else if (skill === 'canvas') returnHtml += CANVAS;
            else if (skill === 'localstorage') returnHtml += LOCALSTORAGE;
            else if (skill === 'vuetify') returnHtml += VUETIFY;
            else if (skill === 'postman') returnHtml += POSTMAN;
            else if (skill === 'wireshark') returnHtml += WIRESHARK;
            else if (skill === 'firebase') returnHtml += FIREBASE;            
            else if (skill === 'icloud') returnHtml += ICLOUD;    
            else if (skill === 'aes256') returnHtml += AES256;
            else if (skill === 'core_image') returnHtml += CORE_IMAGE;                
        }
        return returnHtml;
    }

    loadProjects(type, projects) {
        let html = '';
    
        for (let i = 0; i < projects.length; i++) {
            let project = projects[i];
            let skillHtml = this.getSkillTags(project.skill);
            let useSkillHtml = this.getSkillTags(project.use);
            let environmentHtml = this.getSkillTags(project.environment);

            let imageHTml  = ''
            for (let image of project.images) {
                imageHTml += `
                    <div class="swiper-slide">
                        <img src="${image}" class="swiper-lazy"/>
                    </div>
                `
            }
    
            const template = `
                <div class="col-md-4 pt-4 mb-4 d-flex col-project" data-type="${type}" data-index="${i}">
                    <div class="blog-entry justify-content-end" style="flex: 0 0 100%;">
                        <img class="block-20 border align-items-stretch" src="${project.thumbnail}" style="width: 100%; height: 200px; object-fit: cover;" />
                        <div class="text mt-3 float-right d-block">                        
                            <p class="text-dark font-weight-bold mb-0" style="width: 100%; title="${project.title}">
                                ${project.title}
                            </p>
                            <p class="mb-0">
                                <span class="text-primary">${project.order}</span>
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

                <!-- Modal -->
                <div class="modal fade" id="${type}Modal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-fullscreen">
                    <div class="modal-content">
                        <div class="modal-header">
                            <p class="modal-close mdi mdi-close text-dark h2" style="cursor: pointer;"></p>
                            <p class="modal-title mt-4 font-weight-bold h5">${project.title}</p>
                            <!--<span>${project.description}</span><br/>-->
                            <span class="text-primary">${project.order}</span><br/>
                            <span class="date">${project.date}</span>
                        </div>
                        <div class="modal-body">
                            <div class="description" style="background: #fff;">
                                <div class="row">
                                    <div class="col-md-12">
                                        <span class="text-primary font-weight-bold">담당 업무</span><br/>
                                        <p class="text-dark">${project.task}</p>                                        
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <span class="text-primary font-weight-bold">사용 기술</span><br/>
                                        <p>${useSkillHtml}</p>                                        
                                    </div>
                                </div>
                                <div class="row>
                                    <div class="col-md-12">
                                        <span class="text-primary font-weight-bold">개발 환경</span><br/>
                                        <p>${environmentHtml}</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Swiper -->
                            <div class="swiper mySwiper">
                                <div class="swiper-wrapper">
                                    ${imageHTml}
                                </div>
                                <div class="swiper-button-next"></div>
                                <div class="swiper-button-prev"></div>
                                <div class="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            `
            html += template
        }
        if (type === 'main') {
            $('#main-projects').html(html);
        } else if (type === 'sub') {
            $('#sub-projects').html(html);
        }        
    }

    addEventListener() {        
        const self = this;
        $('.col-project').on('click', function(e) {
            self.showDetailAction(e, self)            
        });
        $('.modal-close').on('click', function(e) {
            self.closeModalAction(e, self);
        });
        $('.swiper-lazy').on('click', function(e) {
            // self.popupImage('images/projects/ABL생명_화상_상담_시스템_구축/6.png')
        });
    }

    removeEventListener() {
        $('.col-project').off('click');
    }

    show() {
        this.removeEventListener();
        this.loadProjects('main', mainProjects);
        this.loadProjects('sub', subProjects);
        this.addEventListener();

        this.swiper = new Swiper(".mySwiper", {
            autoplay: {
                delay: 2000,
                disableOnInteraction: true // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지.
            },
            lazy: true,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

    showDetailAction(e, self) {
        self.type = $(e.currentTarget).attr('data-type');
        self.index = Number($(e.currentTarget).attr('data-index'));
        $(`#${self.type}Modal${self.index}`).modal('toggle');
    }
 
    closeModalAction(e, self) {
        $(`#${self.type}Modal${self.index}`).modal('toggle');
    }

    popupImage(url) {
    }

    // popupImage(url) {
    //     var img=new Image();
    //     img.src = url;
        
    //     /* 이미지의 사이즈 측정 */
    //     var width = screen.availWidth / 1.5;
    //     var height = screen.availHeight / 1.5 - 80;
    //     var left = (screen.width/2)-(width/2);
    //     var top = (screen.height/2)-(height/2);
    //     var openWindow = window.open('', '_blank', `width=${width}, height=${height}, menubars=no, scrollbars=auto, top=${top}, left=${left}`);
    //     openWindow.addEventListener('load', function() {
    //         alert('test');
    //     }, false);
    //     // $(openWindow).on('load', function() {
            
    //     //     $(openWindow.document.body).on('click', function() {
    //     //         window.close();
    //     //     });
    //     // })
    //     openWindow.document.write(`
    //         <div style="text-align: center;">
    //             <img src="${url}" height="100%" onclick="window.close()">
    //         </div>
    //     `);
    // }
}

$(function() {
    let project = new Project();
    project.show();

    $(window).on('resize', () => {
        project.show();
    });
});
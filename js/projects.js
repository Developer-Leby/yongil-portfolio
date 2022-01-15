class Project {
    constructor() {
        this.type = '';
        this.index = 0;
        this.swiper = null;
    }

    loadProjects(type, projects) {
        let html = '';
    
        for (let i = 0; i < projects.length; i++) {
            let project = projects[i];

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
                else if (skill === 'realm') skillHtml += REALM;
                else if (skill === 'php') skillHtml += PHP;
                else if (skill === 'smtp') skillHtml += SMTP;
                else if (skill === 'win-api') skillHtml += WIN_API;
                else if (skill === 'swing') skillHtml += SWING;
                else if (skill === 'tcp') skillHtml += TCP;
                else if (skill === 'udp') skillHtml += UDP;
                else if (skill === 'c') skillHtml += C_LANGUAGE;
            }

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
                            <span class="text-dark font-weight-bold mb-0" style="width: 100%; font-size: 14px;" title="${project.title}">
                                ${project.title}
                            </span>
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
                            <span class="text-primary">${project.order}</span><br/>
                            <span class="date">${project.date}</span>                            
                        </div>
                        <div class="modal-body">
                            <div class="description" style="background: #fff;">
                                <div class="row">
                                    <div class="col-md-6">
                                        <span class="text-dark font-weight-bold">설명</span><br/>
                                        <p>${project.description}</p>
                                    </div>
                                    <div class="col-md-6">
                                        <span class="text-dark font-weight-bold">담당 업무</span><br/>
                                        <p>${project.description}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <span class="text-dark font-weight-bold">사용 기술</span><br/>
                                        <p>${project.description}</p>                                        
                                    </div>
                                    <div class="col-md-6">
                                        <span class="text-dark font-weight-bold">개발 환경</span><br/>
                                        <p>${project.description}</p>
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
                        <div class="modal-footer">
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
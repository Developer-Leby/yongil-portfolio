const sideProjects = [
    {
        title: '디지털교과서 펜쓰기 모듈 고도화 개발',
        date: '2021.11.01 - 2021.12.31',
        company: 'KERIS',
        thumbnail: 'images/projects/kerisDraw/1.jpg',
        images: [
            'images/projects/kerisDraw/1.jpg',
            'images/projects/kerisDraw/2.jpg',
        ],
    },
    {
        title: '디지털교과서 노트 기능 웹 포팅 개발',
        date: '2021.11.01 - 2021.12.31',
        company: 'KERIS',
        thumbnail: 'images/projects/kerisDraw/3.png',
        images: [
            'images/projects/kerisDraw/1.jpg',
            'images/projects/kerisDraw/2.jpg',
        ],
    },
    {
        title: '가족지킴이 iOS 15 버전 업데이트 이슈 대응 개발',
        date: '2021.11.01 - 2021.12.31',
        company: 'KERIS',
        thumbnail: 'images/projects/kerisDraw/4.png',
        images: [
            'images/projects/kerisDraw/1.jpg',
            'images/projects/kerisDraw/2.jpg',
        ],
    },
]

function loadSideProejcts() {

    let width = $("#education-section").width();
    let imageWidth = (width - 18) / 3;

    let html = ''
    for (let project of sideProjects) {        
        const template = `
            <div class="col-md-4 d-flex ftco-animate fadeInUp ftco-animated">
                <div class="blog-entry justify-content-end">
                    <img class="block-20" src="${project.thumbnail}" style="width: 100%; height: 200px; object-fit: contain;" />
                    <div class="text mt-3 float-right d-block">                        
                        <span class="text-dark font-weight-bold text-omission mb-0" style="width: ${imageWidth}px;" title="${project.title}">
                            ${project.title}
                        </span>
                        <p class="mb-0">
                            <span class="text-primary">${project.company}</span>
                        </p>
                        <p class="mb-0">
                            <span class="mr-2">${project.date}</span>
                        </p>           
                        <p>A small river named Duden flows by their place and supplies it with the necessary
                            regelialia.</p>
                    </div>
                </div>
            </div>
        `
        html += template
    }
    document.getElementById('side-projects').innerHTML = html;
}

$(function() {
    loadSideProejcts();
});
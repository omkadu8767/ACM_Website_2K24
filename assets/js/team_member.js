const selectTeamMemberDiv = document.getElementById("team_memberdiv");
const memberData = [
  {name:"Prajwal Kunte", position:"Chairperson", branch:"Information Technology ", profileUrl:"assets/img/team/chairperson.jpg", githubUrl:"https://github.com/Prajwal2930", linkedinUrl:"https://www.linkedin.com/in/prajwal-kunte-008869313"},

  {name:"Harshal Chinchole", position:"Vice Chairperson", branch:"Information Technology ", profileUrl:"assets/img/team/harshal.jpg", githubUrl:"https://github.com/Harshalchinchole", linkedinUrl:"https://www.linkedin.com/in/harshal-chinchole-68b87b25b/"},

  {name:"Vedant Nagpure", position:"Treasurer", branch:"Information Technology", profileUrl:"assets/img/team/vedant.jpg", githubUrl:"https://github.com/myselfVed04", linkedinUrl:"https://www.linkedin.com/in/vedant-nagpure-164849315"},

  {name:"Satyam Mishra", position:"Secretary", branch:"Information Technology ", profileUrl:"assets/img/team/satyam.jpg", githubUrl:"https://github.com/SatyamAnilkumarMishra"
    ,linkedinUrl:"https://www.linkedin.com/in/satyam-mishra-56b636287/"
    },

  {name:"Sakshi Deshmukh", position:"JointSecretary", branch:"Computer science and engineering", profileUrl:"assets/img/team/sakshi desh.jpg", githubUrl:"https://github.com/Sakshideshmukh123", linkedinUrl:"https://www.linkedin.com/in/sakshi-deshmukh-99850128b?trk=contact-info"},


  {name:"Deep Rathod", position:"Technical officer", branch:"Electronic and telecommunications", profileUrl:"assets/img/team/Technical adviser.jpg", githubUrl:"https://github.com/deep941", linkedinUrl:"https://www.linkedin.com/in/deep-rathod-a0883331a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},

  {name:"Shivam lawale", position:"Technology advisor", branch:"Computer science and technology", profileUrl:"assets/img/team/shivam.jpg", githubUrl:"http://github.com/shivjeet1", linkedinUrl:"http://linkedin.com/in/shivam-lavhale"},

  {name:"Hriday Amle", position:"Technology advisor", branch:"Information Technology", profileUrl:"assets/img/team/hriday.jpg", githubUrl:"https://github.com/HridayAmle", linkedinUrl:"https://www.linkedin.com/in/hriday-amle-06103028b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},


  {name:"Shyamal Chavhan", position:"Resource manager", branch:"Information Technology", profileUrl:"assets/img/team/shyamal.jpg", githubUrl:"https://github.com/ShyamalChavhan", linkedinUrl:"https://www.linkedin.com/in/shyamal-chavhan-a8196b286"},

  {name:"Shantanu Dhabale", position:"Resource manager", branch:"Information Technology", profileUrl:"assets/img/team/shantanu.jpg", githubUrl:"https://github.com/Shantanu7171", linkedinUrl:"https://www.linkedin.com/in/shantanu-dhabale-1786aa2b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},

  {name:"Vaidehi jaware", position:"Resource manager", branch:"Information Technology", profileUrl:"assets/img/team/vaidehi.jpg", githubUrl:"NO ACCOUNT", linkedinUrl:"https://www.linkedin.com/in/vaidehi-jaware-94187a294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},


  {name:"Tanuja Sawant", position:"Designer and Editor", branch:"Information Technology", profileUrl:"assets/img/team/tanuja.jpg", githubUrl:"https://github.com/Sawanttanuja", linkedinUrl:"https://www.linkedin.com/in/tanuja-sawant-124914296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},

  {name:"Pranali Ambuskar", position:"Designer and Editor", branch:"Information Technology", profileUrl:"assets/img/team/pranali.jpg", githubUrl:"https://github.com/Ambusk71", linkedinUrl:"https://www.linkedin.com/in/pranali-ambuskar-44b3b2293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},


  {name:"Sakshi Rajankar", position:"Public relations manager", branch:"Information Technology", profileUrl:"assets/img/team/sakshi.jpg", githubUrl:"https://github.com/SakshiRR2705", linkedinUrl:"https://www.linkedin.com/in/sakshi-rajankar-89457228a/"},

  {name:"Tejaswini Thakare", position:"Public relations manager", branch:"Information Technology", profileUrl:"assets/img/team/tejswini.jpg", githubUrl:"NO ACCOUNT", linkedinUrl:"https://www.linkedin.com/in/tejswini-thakre-a45871294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},

  {name:"Om Polkat", position:"Public relations and manager", branch:"Information Technology", profileUrl:"assets/img/team/om.jpg", githubUrl:"https://www.github.com/0m1966", linkedinUrl:"https://www.linkedin.com/in/om-polkat-2nd-913ba4317/"},


  {name:"Pranit Bijave", position:"Event planner and organiser", branch:"Information Technology", profileUrl:"assets/img/team/pranit.jpg", githubUrl:"https://github.com/PranitBijave27", linkedinUrl:"https://www.linkedin.com/in/pranit-bijave-b1021028a/"},

  {name:"Pallavi Gite", position:"Event planner and organiser", branch:"Information Technology", profileUrl:"assets/img/team/pallavi.jpg", githubUrl:"https://github.com/pallavigite73", linkedinUrl:"https://www.linkedin.com/in/pallavi-gite-4928b82a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},

  {name:"Sharayu Ingle", position:"Event planner and organiser", branch:"Electronic and telecommunications", profileUrl:"assets/img/team/shrayu.jpg", githubUrl:"https://github.com/sharayu866911", linkedinUrl:"https://www.linkedin.com/in/sharayu-ingle-1443ba227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},

 
];

memberData.map((member) => {
  selectTeamMemberDiv.innerHTML += `
    <div class="col-lg-6 mt-4">
      <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
        <div class="pic"><img src="${member?.profileUrl}" class="img-fluid" alt=""></div>
        <div class="member-info">
          <h4>${member?.name}</h4>
          <span>${member?.position}</span>
          <p>${member?.branch}</p>
          <div class="social">
            <a href="${member?.githubUrl}" target="_blank"><i class="ri-github-fill"></i></a>
            <a href="${member?.linkedinUrl}" target="_blank"><i class="ri-linkedin-box-fill"></i></a>
          </div>
        </div>
      </div>
    </div>
  `;
}); 
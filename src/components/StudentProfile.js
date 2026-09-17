function StudentProfile(props) {
  return (
    <div> 
    <center>
    
    <h1><marquee>Student Profile</marquee></h1>
      <p><b><i>Name: </i></b>{props.name}</p>
      <p><b><i>CMS ID:</i></b> {props.cmsId}</p>
      <p><b><i>Program:</i></b> {props.program}</p>
      <p><b><i>Semester:</i></b> {props.semester}</p>
    
    </center> 
    </div>
  );
}

export default StudentProfile;
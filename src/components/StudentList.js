import React, {useState, useEffect} from 'react'
import StudentButton from './StudentButton'

function StudentList(props) {
  const {studentList} = props;
  const studentButtonList =
    studentList['student_list'].map(student => {
      return <StudentButton
              student={student}
              key={student._id}
              handleClick={props.handleClick}>
            </StudentButton>
    });

    const addButton = <StudentButton student={null}
                                  key={-1}
                                  handleClick={props.handleClick}>
                      </StudentButton>

    return studentButtonList.concat(addButton);
}

export default StudentList;
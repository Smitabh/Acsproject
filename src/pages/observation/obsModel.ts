//INSERT INTO `tblobservation` (`idObservation`, `teacherId`, `classroomId`,`periodId`, `remarkId`, `obsDate`) VALUES (NULL, '1', '1', '1', '1', '2018-10-03');

export class obsStructure{
    idObservation?:number;
    teacherId?:number;
    classroomId?:number;
    periodId?:number;
    remarkId?:number;
    obsDate?:Date;
    obsTime?:string;

}
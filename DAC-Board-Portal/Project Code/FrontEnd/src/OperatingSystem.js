
const OperatingSystem = () => {
    return (
        <>
              <div>
                <a href="/" > <button className="btn btn-secondary btn-lg float-right" type="submit" >BACK</button> </a>
            </div>
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="card text-white bg-dark mb-3 m-2">
                        <div className="card-body">
                            <h5 className="card-title">Session 1: Introduction to OS</h5>
                            <dd>1.Evolution and components of Operating System</dd>
                            <dd>2.Different from other application software</dd>
                            <dd>3.Functionality and Services of Operating System</dd>
                            <dd>4.Types of Operating System</dd>

                        </div>
                    </div>

                    <div className="card text-white bg-dark mb-3 m-2">
                        <div className="card-body">
                            <h5 className="card-title">Session 2: Introduction to Linux</h5>
                            <dd>1. Basics of File Systemtypes </dd>
                            <dd>2. Commands associated with files/directories</dd>
                            <dd>3. Permissions (chmod,chown, etc)</dd>
                            <dd>4. Access control list</dd>
                        </div>
                    </div>


                    <div className="card text-white bg-dark mb-3 m-2">
                        <div className="card-body">
                            <h5 className="card-title">Session 3: File Management</h5>
                            <dd>1. Attributes and Operations on File Management</dd>
                            <dd>2. File Access Methods </dd>
                            <dd>3. Directory Structure </dd>                      
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="card text-white bg-dark mb-3 m-2">
                        <div className="card-body">
                            <h5 className="card-title">Session 4: Shell Programming </h5>
                            <dd>1. Types of shells in Linux </dd>
                            <dd>2.  Shell Variables and Wild Card symbols </dd>
                            <dd>3.  Shell Meta characters </dd>
                            <dd>4.  Command line arguments  </dd>
                            <dd>5.  Read, Echo, decision loops, arithmetic expressions </dd>                          
                        </div>
                    </div>

                    <div className="card text-white bg-dark mb-3 m-2">
                        <div className="card-body">
                            <h5 className="card-title">Session 5: Process</h5>
                            <dd>1. Process States </dd>
                            <dd>2. Preemptive and non-preemptive processes </dd>
                            <dd>3. Process life cycle </dd>                          
                        </div>
                    </div>

                    <div className="card text-white bg-dark mb-3 m-2">
                        <div className="card-body">
                            <h5 className="card-title">Session 6&7: Process scheduling algorithms</h5>
                            <dd>1.  FCFS </dd>
                            <dd>2.  RR </dd>
                            <dd>3.  Shortest Job First </dd> 
                            <dd>4.  Priority </dd>                          
                        </div>
                    </div>

                </div>
            </div>

            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="card text-white bg-dark mb-3 m-2">
                        <div className="card-body">
                            <h5 className="card-title">Session 8: Threads </h5>
                            <dd>1. Types ofThreads - user and kernel threads </dd>
                            <dd>2. Difference between Threads and Process </dd>                                                   
                        </div>
                    </div>

                    <div className="card text-white bg-dark mb-3 m-2">
                        <div className="card-body">
                            <h5 className="card-title">Session 9: Process</h5>
                            <dd>1.Deadlock Handling Strategies </dd>
                            <dd>2.Preemptive and non-preemptive processes </dd>
                            <dd>3.Process life cycle </dd>                          
                        </div>
                    </div>

                    
                </div>
            </div>


        </>
    );
}

export default OperatingSystem;
import React from 'react'
import "../App.scss"

const Instruction = () => {
    return ( 
        <div className="Instruction">
            <div className="Aboutcontent">
                <div className="about-intro">
                    <h1>Instructions </h1>
                    <h2>To Contribute :</h2>
                <p>
                    <list>
                        <ol>
                           <li>Look up for the possible ways you can contribute by the posts available in contributions section.</li>
                            <li>Register by giving you username and Email-ID.</li>
                            <li>Sign-In to continue with you contribution.</li>
                            <li>Donate accessories for the needy based on their requirement.
                                Or Help Raise Funds for the hungry ones to get a meal, for Students to get their Education, Patience to get their treatment done.</li>
                            <li>Once you select the one whom you wish to donate. Visit their profile and Click on Contribute.</li>
                            <li>Once Redirected to the Payment Gateway, fill the required details and click Proceed.</li>
                        </ol>
                    </list>
                </p>

                <h2>To Get Contributions : </h2>
                <p>
                    <list>
                        <ol>
                            <li>Register by giving you username and Email-ID.</li>
                            <li>Sign-In to continue.</li>
                            <li>Write down a post with essential details of the cause you
                                need the contribution for/ raising contribution for.</li>
                            <li>Provide genuine documents (if necessary) as per the requirement stated. 
                                And Contact details <i>(for the contributors to contact you if required)</i></li>
                            <li>Recheck the details and Submit the Post.</li>
                        </ol>
                    </list>
                </p>
                </div>
            </div>
        </div>
    );
}

export default Instruction;
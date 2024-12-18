import React from "react";
import { useNavigate } from "react-router-dom";
function Navigate() {
    const navigate = useNavigate();
    function eventdash() {
        navigate("./Home")

    }

    function eventdash1() {
        navigate("./sales")

    }

    function eventdash2() {
        navigate("./Products")

    }

    function eventdash3() {
        navigate("./Reports")

    }
    function eventdash4() {
        navigate("./Customer")

    }


    return (
        <>
            <div class="row">
                <div class="container-1">
                    <div class="col-2">

                        <div class="container-dash">
                           


                            <div>

                                <button onClick={eventdash} class="Dashboard-btn">Home</button>
                            </div>
                            <div>
                                <button onClick={eventdash1} class="Dashboard-btn">Messages</button>
                            </div>
                            <div>

                                <button onClick={eventdash2} class="Dashboard-btn">More</button>
                            </div>
                           

                        </div>


                    </div>
                </div>


            </div>
        </>
    )
}
export default Navigate
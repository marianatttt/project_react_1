
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {actorActions} from "../../redux";
import {api_img} from "../../configs";

const Actors = () => {

    const { actors, page } = useSelector((state) => state.actors);
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams({ page });

    useEffect(() => {
        dispatch(actorActions.getAll(page));
        setSearchParams({ page });
    }, [dispatch, page, setSearchParams]);



    return (
        <div className="container_movie-list">
            <div className="container_button_next_back">
                <button onClick={()=>{dispatch(actorActions.setPage(page - 1))}} disabled={page === 1}>
                    Back
                </button>
                <div>{page}</div>
                <button onClick={() =>{dispatch(actorActions.setPage(page + 1))}}>
                    Next
                </button>
            </div>
            <div className="actors-list">
                {actors?.map((actor) => (
                <div className="actor-card" key={actor.id}>
                    <img className="actor-poster"
                        src={api_img + actor.profile_path}/>
                    <div className="actor-details">
                        <h3>{actor.name}</h3>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export { Actors };
import React from 'react';
import { searchContent } from '@plone/volto/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react'

const Articles = props => {
    const { id } = props;
    const searchSubrequests = useSelector(state => state.search.subrequests);
    const dispatch = useDispatch();
    const results = searchSubrequests?.[id]?.items;

    React.useEffect(() => {
        dispatch(
            searchContent(
                '/blog',
                {
                    sort_on: 'created',
                    Subject: 'coding'
                },
                id,
            ),
        );
    }, [dispatch, id]);

    return (
        <div className="projects">
            {results &&
                results.map(story => (
                    <div key={story['@id']} className="project">
                        <div className="project-title"><Link to={story['@id']}>{story.title}</Link></div>
                        <div>{story["description"]}</div>
                        <Divider />
                    </div>
                ))}
            <div className="more-highlight"><Link to='/blog/coding'>See More...</Link></div>
        </div>
    );
};

export default Articles;
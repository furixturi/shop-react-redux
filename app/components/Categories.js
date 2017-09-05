import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
    render() {
        const categoryComponents = this.props.categories.map((category) => {
            return (
                    <li key={category.id}><a href="#">{category.name}</a></li>
                );
        });
        return (
            <ul className = "categories">
                {categoryComponents}
            </ul>
        );
    }
}

Categories.propTypes = {
    categories: PropTypes.array.isRequired
};

export default Categories;

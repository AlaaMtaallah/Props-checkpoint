const Image = props => {
    // whatever is passed between the tags of the component call can be accessed via this syntax
    return (
        <div className="text-center">
            {props.children}
        </div>
    );
};
export default Image;
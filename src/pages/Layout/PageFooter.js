import React, { Component } from 'react';

class PageFooter extends Component {
    render() {
        return (
            <footer class="footer text-center">
                <a href="#myPage" title="To Top">
                    <span class="glyphicon glyphicon-chevron-up"></span>
                </a>
                <p><strong>&copy;2018. All rights reserved</strong></p>
            </footer>
        )
    }
}
export default PageFooter;
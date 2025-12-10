// Shared navigation and footer components for maxpool.dev
// Usage: Include this script and add <div id="nav"></div> and <div id="footer"></div> placeholders

(function() {
    // Determine the base path by finding where components.js is loaded from
    function getBasePath() {
        const scripts = document.getElementsByTagName('script');
        for (let script of scripts) {
            const src = script.getAttribute('src');
            if (src && src.includes('components.js')) {
                // Return the path prefix before components.js
                return src.replace('components.js', '');
            }
        }
        return '../'; // fallback for research-papers depth
    }

    const basePath = getBasePath();

    // Navigation HTML
    const navHTML = `
        <div class="mp-navigation">
            <a href="${basePath}index.html" class="mp-logo"><img src="${basePath}images/maxpool_logo_color.jpeg" alt="maxpool"></a>
            <div class="mp-nav-links">
                <a href="${basePath}agent/index.html">Agent Reliability</a>
                <a href="${basePath}rag/index.html">RAG Patterns</a>
                <a href="${basePath}research-papers/index.html">Research Papers</a>
                <a href="https://join.maxpool.dev" target="_blank">Join Community →</a>
            </div>
        </div>
    `;

    // Footer HTML
    const footerHTML = `
        <div class="mp-footer">
            <a href="${basePath}index.html"><img src="${basePath}images/maxpool_logo_color.jpeg" alt="maxpool"></a>
            <a href="https://join.maxpool.dev" target="_blank" class="mp-footer-url">join.maxpool.dev</a>
        </div>
    `;

    // Navigation and Footer CSS
    const styles = `
        .mp-navigation {
            display: flex;
            align-items: center;
            position: relative;
            padding: 10px 20px;
            background: #f8f8f8;
            border-radius: 5px;
            min-height: 64px;
            max-width: 900px;
            margin: 0 auto 30px auto;
            box-sizing: border-box;
        }
        .mp-navigation .mp-logo {
            display: flex;
            align-items: center;
            position: absolute;
            left: 20px;
        }
        .mp-navigation .mp-logo img {
            height: 44px;
            width: auto;
            border-radius: 8px;
            transition: opacity 0.2s;
        }
        .mp-navigation .mp-logo:hover img {
            opacity: 0.7;
        }
        .mp-navigation .mp-nav-links {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 44px;
            width: 100%;
        }
        .mp-navigation .mp-nav-links a {
            color: #DC8850;
            text-decoration: none;
            margin-left: 25px;
            font-weight: bold;
            font-family: -apple-system, BlinkMacSystemFont, sans-serif;
            font-size: 14px;
            line-height: 1;
        }
        .mp-navigation .mp-nav-links a:first-child {
            margin-left: 0;
        }
        .mp-navigation .mp-nav-links a:hover {
            text-decoration: underline;
        }
        .mp-footer {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 40px;
            padding: 30px 20px;
        }
        .mp-footer img {
            height: 50px;
            width: auto;
            border-radius: 8px;
        }
        .mp-footer-url {
            margin-top: 10px;
            color: #666;
            font-family: -apple-system, BlinkMacSystemFont, sans-serif;
            font-size: 14px;
            text-decoration: none;
        }
        .mp-footer-url:hover {
            color: #DC8850;
            text-decoration: underline;
        }
    `;

    // Inject styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);

    // Inject navigation
    document.addEventListener('DOMContentLoaded', function() {
        const navPlaceholder = document.getElementById('nav');
        if (navPlaceholder) {
            navPlaceholder.innerHTML = navHTML;
        }

        const footerPlaceholder = document.getElementById('footer');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = footerHTML;
        }
    });
})();

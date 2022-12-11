import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';

const options = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => (
            <p
                style={{
                    color: theme.colors.darkBlue,
                    fontFamily: theme.fonts.Century_Gothic,
                    fontSize: '15px',
                    lineHeight: '30px',
                    marginBottom: '0.75rem',
                }}
            >
                {children}
            </p>
        ),
        [BLOCKS.UL_LIST]: (node, children) => {
            return (
                <ul
                    style={{
                        listStyle: 'disc',
                        color: theme.colors.darkBlue,
                        fontFamily: theme.fonts.Century_Gothic,
                        fontSize: '15px',
                        lineHeight: '30px',
                        marginLeft: '1rem',
                    }}
                >
                    {children.map((item) => (
                        <li key={item.key}>{item.props.children[0].props.children[0]}</li>
                    ))}
                </ul>
            );
        },

        [INLINES.HYPERLINK]: (node, children) => {
            return (
                <a
                    href={node.data.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: theme.colors.darkBlue }}
                >
                    {children}
                </a>
            );
        },
    },
};

documentToReactComponents(content, options);
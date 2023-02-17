import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
    const cssLoader = buildCssLoader(isDev);
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    return [cssLoader, tsLoader, svgLoader, fileLoader];
}

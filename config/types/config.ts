import { Configuration } from "webpack";

export type BuildMode = Configuration['mode'];

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
}

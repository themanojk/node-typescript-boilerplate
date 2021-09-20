import express from 'express';

export interface Request extends express.Request {
    token ?: string,
    decoded ?: any,
    country ?: string | undefined
}

export interface Response extends express.Response {};

export interface NextFunction extends express.NextFunction {};
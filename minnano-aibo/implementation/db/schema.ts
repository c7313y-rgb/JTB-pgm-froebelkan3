import {sqliteTable,text,integer} from 'drizzle-orm/sqlite-core';
export const accounts=sqliteTable('accounts',{id:text('id').primaryKey(),email:text('email').notNull().unique(),school:text('school').notNull(),level:text('level').notNull(),prefecture:text('prefecture').notNull(),password:text('password').notNull(),createdAt:integer('created_at').notNull(),consentVersion:text('consent_version').notNull()});
export const sessions=sqliteTable('sessions',{hash:text('hash').primaryKey(),accountId:text('account_id').notNull().references(()=>accounts.id,{onDelete:'cascade'}),expiresAt:integer('expires_at').notNull()});
export const work=sqliteTable('work',{accountId:text('account_id').primaryKey().references(()=>accounts.id,{onDelete:'cascade'}),data:text('data').notNull().default('{}'),updatedAt:integer('updated_at').notNull()});
export const attempts=sqliteTable('attempts',{key:text('key').primaryKey(),count:integer('count').notNull(),resetAt:integer('reset_at').notNull()});

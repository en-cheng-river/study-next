FROM harbor.nosugar.io/library/node:18-bullseye AS builder
WORKDIR /workspace
COPY . .
RUN yarn && yarn build

FROM harbor.nosugar.io/library/node-nginx:slim AS runner
WORKDIR /workspace
#RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001
# COPY --from=builder --chown=nextjs:nodejs /workspace/dist ./dist
COPY --from=builder /workspace/next.config.ts ./
COPY --from=builder /workspace/public ./public
COPY --from=builder /workspace/node_modules ./node_modules
COPY --from=builder /workspace/package.json ./package.json
COPY --from=builder /workspace/dist ./dist
# USER nextjs
# EXPOSE 3000,80
# CMD ["sh", "-c", "nohup node_modules/.bin/next start & nginx -g 'daemon off;'"]


# Dockerfile to build Vue + LaTeX (pdflatex) with fontawesome support

FROM node:18-bullseye

ENV DEBIAN_FRONTEND=noninteractive

# Install LaTeX with only the needed packages
RUN apt-get update && apt-get install -y \
    texlive-latex-base \
    texlive-fonts-extra \
    texlive-latex-extra \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /workspace

# Create necessary directories
RUN mkdir -p /frontend /latex /output

# Copy entrypoint script
COPY build/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Set entrypoint
ENTRYPOINT ["/entrypoint.sh"]

